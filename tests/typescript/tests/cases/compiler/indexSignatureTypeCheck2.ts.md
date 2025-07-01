__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPropertySet",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  },
                  "start": 31,
                  "end": 39
                },
                "start": 26,
                "end": 39
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 25,
            "end": 45
          }
        ],
        "start": 19,
        "end": 47
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPropertySet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 69
                },
                "typeArguments": null,
                "start": 57,
                "end": 69
              },
              "start": 55,
              "end": 69
            },
            "start": 53,
            "end": 69
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 72,
            "end": 76
          },
          "definite": false,
          "start": 53,
          "end": 76
        }
      ],
      "declare": false,
      "start": 49,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "start": 82,
            "end": 92
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 95,
            "end": 102
          },
          "definite": false,
          "start": 82,
          "end": 102
        }
      ],
      "declare": false,
      "start": 78,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ps",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 112
          },
          "optional": false,
          "computed": true,
          "start": 104,
          "end": 113
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 116,
          "end": 118
        },
        "start": 104,
        "end": 118
      },
      "directive": null,
      "start": 104,
      "end": 119
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "indexErrors",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 142
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 155,
                    "end": 161
                  },
                  "start": 153,
                  "end": 161
                },
                "start": 150,
                "end": 161
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 149,
            "end": 163
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 174
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 176,
                      "end": 179
                    },
                    "start": 176,
                    "end": 181
                  },
                  "start": 174,
                  "end": 181
                },
                "value": null,
                "start": 169,
                "end": 181
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 168,
            "end": 183
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p4",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 193,
                    "end": 199
                  },
                  "start": 191,
                  "end": 199
                },
                "start": 189,
                "end": 199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p5",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  },
                  "start": 204,
                  "end": 212
                },
                "start": 201,
                "end": 212
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 188,
            "end": 214
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p6",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  },
                  "start": 222,
                  "end": 230
                },
                "start": 220,
                "end": 230
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 237
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 239,
                      "end": 242
                    },
                    "start": 239,
                    "end": 244
                  },
                  "start": 237,
                  "end": 244
                },
                "value": null,
                "start": 232,
                "end": 244
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 219,
            "end": 246
          }
        ],
        "start": 143,
        "end": 248
      },
      "declare": false,
      "start": 121,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
