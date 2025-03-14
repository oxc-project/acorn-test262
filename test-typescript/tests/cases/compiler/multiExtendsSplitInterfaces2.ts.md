multiExtendsSplitInterfaces2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
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
            "start": 15,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 67,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 67,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 65,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "decorators": [],
              "name": "i1",
              "optional": false
            },
            "optional": false,
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
          "start": 49,
          "end": 50,
          "expression": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 96,
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 96,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 94,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 93,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 123,
            "end": 134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "i2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 118,
          "end": 119,
          "expression": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "I",
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
      "start": 149,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 157,
            "end": 160,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "i1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 175,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 173,
              "end": 175,
              "decorators": [],
              "name": "i1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 185,
            "end": 188,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 196,
            "decorators": [],
            "name": "i2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 199,
            "end": 203,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 201,
              "end": 203,
              "decorators": [],
              "name": "i2",
              "optional": false
            }
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
