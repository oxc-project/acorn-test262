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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "IPropertySet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  }
                },
                "decorators": [],
                "optional": false
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 69,
            "name": "ps",
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
                  "name": "IPropertySet",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 92,
            "name": "index",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 92,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
            "name": "ps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 112,
            "name": "index",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
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
        "name": "indexErrors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "p2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  }
                },
                "decorators": [],
                "optional": true
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
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 174,
                  "name": "p3",
                  "typeAnnotation": null,
                  "decorators": [],
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
                "name": "p4",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 191,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 193,
                    "end": 199
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 201,
                "end": 212,
                "name": "p5",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 204,
                  "end": 212,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  }
                },
                "decorators": [],
                "optional": true
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
                "name": "p6",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 232,
                "end": 244,
                "argument": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "name": "p7",
                  "typeAnnotation": null,
                  "decorators": [],
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
