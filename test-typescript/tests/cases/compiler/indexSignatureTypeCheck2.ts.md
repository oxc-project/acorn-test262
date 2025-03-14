indexSignatureTypeCheck2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 47,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 25,
            "end": 45,
            "parameters": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "IPropertySet",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 69,
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 69,
                  "decorators": [],
                  "name": "IPropertySet",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 72,
            "end": 76,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 92,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 92,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 95,
            "end": 102,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 113,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "ps",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 112,
            "decorators": [],
            "name": "index",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 116,
          "end": 118,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 121,
      "end": 248,
      "body": {
        "type": "TSInterfaceBody",
        "start": 143,
        "end": 248,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 149,
            "end": 163,
            "parameters": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 161,
                "decorators": [],
                "name": "p2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 168,
            "end": 183,
            "parameters": [
              {
                "type": "RestElement",
                "start": 169,
                "end": 181,
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 174,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 176,
                    "end": 181,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 176,
                      "end": 179
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 188,
            "end": 214,
            "parameters": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 199,
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 191,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 193,
                    "end": 199
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 201,
                "end": 212,
                "decorators": [],
                "name": "p5",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 204,
                  "end": 212,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 219,
            "end": 246,
            "parameters": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 230,
                "decorators": [],
                "name": "p6",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 232,
                "end": 244,
                "argument": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "p7",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 237,
                  "end": 244,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 239,
                    "end": 244,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 239,
                      "end": 242
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 142,
        "decorators": [],
        "name": "indexErrors",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
