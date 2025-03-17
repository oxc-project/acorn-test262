__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 399,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 2,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 20,
        "name": "numbers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 27,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 31,
            "name": "zero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 37,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 42,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "name": "zero",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 65,
        "name": "indexAccess",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
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
      "start": 101,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 122,
            "name": "test",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 122,
                  "name": "indexAccess",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 133,
            "end": 140,
            "object": {
              "type": "Identifier",
              "start": 133,
              "end": 137,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 138,
              "end": 139,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 150,
            "end": 157,
            "object": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 169,
            "end": 187,
            "object": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 174,
              "end": 186,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 181,
                "name": "numbers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 186,
                "name": "zero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 198,
            "end": 215,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 202,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 203,
              "end": 214,
              "object": {
                "type": "Identifier",
                "start": 203,
                "end": 210,
                "name": "numbers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 214,
                "name": "one",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 248,
            "object": {
              "type": "Identifier",
              "start": 227,
              "end": 231,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 232,
              "end": 247,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "name": "numbers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 240,
                "end": 246,
                "value": "zero",
                "raw": "\"zero\""
              },
              "computed": true,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 259,
            "end": 279,
            "object": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 264,
              "end": 278,
              "object": {
                "type": "Identifier",
                "start": 264,
                "end": 271,
                "name": "numbers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 272,
                "end": 277,
                "value": "one",
                "raw": "\"one\""
              },
              "computed": true,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 282,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 302,
        "name": "numbersNotConst",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 309,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "name": "zero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 319,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 322,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 303,
        "end": 324,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 309,
            "end": 313,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "name": "zero",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 319,
            "end": 322,
            "id": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 335,
            "end": 361,
            "object": {
              "type": "Identifier",
              "start": 335,
              "end": 339,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 340,
              "end": 360,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 355,
                "name": "numbersNotConst",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "name": "zero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 369,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 372,
            "end": 397,
            "object": {
              "type": "Identifier",
              "start": 372,
              "end": 376,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 377,
              "end": 396,
              "object": {
                "type": "Identifier",
                "start": 377,
                "end": 392,
                "name": "numbersNotConst",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 393,
                "end": 396,
                "name": "one",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
