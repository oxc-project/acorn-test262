__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 48,
          "end": 49,
          "expression": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 64,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
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
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 102,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
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
      "start": 106,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "X",
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
      "start": 116,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "name": "Y",
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
      "start": 126,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 133,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "name": "Z",
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
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 180,
            "end": 189,
            "elements": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 191,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 200,
            "end": 209,
            "elements": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 202,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 211,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 217,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 220,
            "end": 229,
            "elements": [
              {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 231,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 240,
            "end": 249,
            "elements": [
              {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 244,
                "end": 245,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 251,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "name": "b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 260,
            "end": 269,
            "elements": [
              {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 271,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "name": "b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 280,
            "end": 289,
            "elements": [
              {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
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
