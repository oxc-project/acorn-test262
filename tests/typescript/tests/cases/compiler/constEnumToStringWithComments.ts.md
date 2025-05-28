__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 94,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 25,
              "end": 28,
              "value": 100,
              "raw": "100"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 38,
              "end": 41,
              "value": 0.5,
              "raw": "0.5"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": 2,
              "raw": "2."
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 63,
              "end": 65,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 75,
              "end": 79,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 76,
                "end": 79,
                "value": 1.5,
                "raw": "1.5"
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 85,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 89,
              "end": 92,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 90,
                "end": 92,
                "value": 1,
                "raw": "1."
              },
              "prefix": true
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 122,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 105,
            "end": 121,
            "callee": {
              "type": "MemberExpression",
              "start": 105,
              "end": 119,
              "object": {
                "type": "MemberExpression",
                "start": 105,
                "end": 110,
                "object": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 119,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 152,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 132,
            "end": 151,
            "callee": {
              "type": "MemberExpression",
              "start": 132,
              "end": 149,
              "object": {
                "type": "MemberExpression",
                "start": 132,
                "end": 140,
                "object": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 136,
                  "end": 139,
                  "value": "X",
                  "raw": "\"X\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 149,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 179,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 159,
            "decorators": [],
            "name": "y0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 178,
            "callee": {
              "type": "MemberExpression",
              "start": 162,
              "end": 176,
              "object": {
                "type": "MemberExpression",
                "start": 162,
                "end": 167,
                "object": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 168,
                "end": 176,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 209,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 186,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 208,
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 206,
              "object": {
                "type": "MemberExpression",
                "start": 189,
                "end": 197,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 193,
                  "end": 196,
                  "value": "Y",
                  "raw": "\"Y\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 198,
                "end": 206,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 236,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 216,
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 219,
            "end": 235,
            "callee": {
              "type": "MemberExpression",
              "start": 219,
              "end": 233,
              "object": {
                "type": "MemberExpression",
                "start": 219,
                "end": 224,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 222,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 233,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 266,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 265,
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 263,
              "object": {
                "type": "MemberExpression",
                "start": 246,
                "end": 254,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 250,
                  "end": 253,
                  "value": "Z",
                  "raw": "\"Z\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 263,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 293,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 273,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 276,
            "end": 292,
            "callee": {
              "type": "MemberExpression",
              "start": 276,
              "end": 290,
              "object": {
                "type": "MemberExpression",
                "start": 276,
                "end": 281,
                "object": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 279,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 282,
                "end": 290,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 323,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 322,
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 320,
              "object": {
                "type": "MemberExpression",
                "start": 303,
                "end": 311,
                "object": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 306,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 307,
                  "end": 310,
                  "value": "A",
                  "raw": "\"A\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 320,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 350,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 333,
            "end": 349,
            "callee": {
              "type": "MemberExpression",
              "start": 333,
              "end": 347,
              "object": {
                "type": "MemberExpression",
                "start": 333,
                "end": 338,
                "object": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 336,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 339,
                "end": 347,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 380,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 357,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 379,
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 377,
              "object": {
                "type": "MemberExpression",
                "start": 360,
                "end": 368,
                "object": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 363,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 364,
                  "end": 367,
                  "value": "B",
                  "raw": "\"B\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 369,
                "end": 377,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 381,
      "end": 407,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 406,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 387,
            "decorators": [],
            "name": "c0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 390,
            "end": 406,
            "callee": {
              "type": "MemberExpression",
              "start": 390,
              "end": 404,
              "object": {
                "type": "MemberExpression",
                "start": 390,
                "end": 395,
                "object": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 396,
                "end": 404,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 437,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 414,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 436,
            "callee": {
              "type": "MemberExpression",
              "start": 417,
              "end": 434,
              "object": {
                "type": "MemberExpression",
                "start": 417,
                "end": 425,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 420,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 421,
                  "end": 424,
                  "value": "C",
                  "raw": "\"C\""
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 426,
                "end": 434,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
