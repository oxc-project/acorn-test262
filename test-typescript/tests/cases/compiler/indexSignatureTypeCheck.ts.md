__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "name": "IPropertySet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 54,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 30,
            "end": 51,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 44,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 77,
            "name": "ps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 65,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 77,
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
            "start": 80,
            "end": 84,
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
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 100,
            "name": "index",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 100,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 97,
                "end": 100
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 110,
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
      "start": 112,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 121,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "name": "ps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
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
          "start": 124,
          "end": 126,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 130,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 151,
        "name": "indexErrors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 257,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 158,
            "end": 172,
            "parameters": [
              {
                "type": "Identifier",
                "start": 159,
                "end": 170,
                "name": "p2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
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
            "start": 177,
            "end": 192,
            "parameters": [
              {
                "type": "RestElement",
                "start": 178,
                "end": 190,
                "argument": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 183,
                  "name": "p3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 183,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 185,
                    "end": 190,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 185,
                      "end": 188
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
            "start": 197,
            "end": 223,
            "parameters": [
              {
                "type": "Identifier",
                "start": 198,
                "end": 208,
                "name": "p4",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 200,
                  "end": 208,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 202,
                    "end": 208
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 210,
                "end": 221,
                "name": "p5",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 213,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
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
            "start": 228,
            "end": 255,
            "parameters": [
              {
                "type": "Identifier",
                "start": 229,
                "end": 239,
                "name": "p6",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 241,
                "end": 253,
                "argument": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 246,
                  "name": "p7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 248,
                    "end": 253,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 248,
                      "end": 251
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
