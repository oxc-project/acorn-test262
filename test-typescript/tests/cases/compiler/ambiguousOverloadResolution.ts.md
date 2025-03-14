ambiguousOverloadResolution.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 46,
      "end": 85,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 84,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 78,
          "end": 84
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 86,
      "end": 125,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 105,
          "end": 109,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 109,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 111,
          "end": 115,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 124,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 118,
          "end": 124
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "B",
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
      "start": 137,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 160,
            "arguments": [
              {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
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
