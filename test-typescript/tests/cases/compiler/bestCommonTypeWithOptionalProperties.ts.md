bestCommonTypeWithOptionalProperties.ts
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
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 28,
      "end": 66,
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
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 48,
          "end": 49,
          "expression": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 67,
      "end": 104,
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
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 87,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "Z",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "z",
            "optional": false,
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
                  "decorators": [],
                  "name": "Z",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "b1",
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "b2",
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 217,
            "decorators": [],
            "name": "b3",
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
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "decorators": [],
            "name": "b4",
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
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 244,
                "end": 245,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "b5",
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
                "decorators": [],
                "name": "z",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "decorators": [],
            "name": "b6",
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
                "decorators": [],
                "name": "z",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
