__ESTREE_TEST__:PASS:
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "IPropertySet",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 45,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 77,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 76,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 72,
            "end": 76,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 103,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 102,
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
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 112,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 116,
          "end": 118,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 121,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 142,
        "decorators": [],
        "name": "indexErrors",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 174,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null
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
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "p7",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
