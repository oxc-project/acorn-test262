__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 452,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 149,
            "callee": {
              "type": "MemberExpression",
              "start": 137,
              "end": 147,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 147,
                "name": "toString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 157,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 175,
            "callee": {
              "type": "MemberExpression",
              "start": 160,
              "end": 173,
              "object": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 162,
                "end": 172,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 183,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 186,
            "end": 191,
            "object": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 188,
              "end": 191,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 202,
            "end": 210,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 204,
              "end": 209,
              "value": "foo",
              "raw": "'foo'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 213,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 225,
        "end": 245,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 231,
            "end": 243,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 254,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 265,
            "end": 277,
            "callee": {
              "type": "MemberExpression",
              "start": 265,
              "end": 275,
              "object": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 275,
                "name": "toString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 303,
            "callee": {
              "type": "MemberExpression",
              "start": 288,
              "end": 301,
              "object": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 290,
                "end": 300,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 311,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 314,
            "end": 319,
            "object": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 316,
              "end": 319,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 330,
            "end": 338,
            "object": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 332,
              "end": 337,
              "value": "bar",
              "raw": "'bar'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 349,
            "end": 364,
            "properties": [
              {
                "type": "Property",
                "start": 355,
                "end": 362,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 358,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 360,
                  "end": 362,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 375,
            "end": 387,
            "callee": {
              "type": "MemberExpression",
              "start": 375,
              "end": 385,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 385,
                "name": "toString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 395,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 398,
            "end": 413,
            "callee": {
              "type": "MemberExpression",
              "start": 398,
              "end": 411,
              "object": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 400,
                "end": 410,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 422,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 425,
            "end": 430,
            "object": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 427,
              "end": 430,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 442,
            "end": 450,
            "object": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 444,
              "end": 449,
              "value": "foo",
              "raw": "'foo'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
