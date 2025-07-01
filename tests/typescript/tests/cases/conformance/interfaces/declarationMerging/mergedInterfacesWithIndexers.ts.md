__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 102,
                  "end": 110
                },
                "start": 101,
                "end": 110
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 100,
            "end": 120
          }
        ],
        "start": 94,
        "end": 122
      },
      "declare": false,
      "start": 82,
      "end": 122
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  },
                  "start": 145,
                  "end": 153
                },
                "start": 144,
                "end": 153
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 164
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      },
                      "start": 164,
                      "end": 172
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 158,
                    "end": 172
                  }
                ],
                "start": 156,
                "end": 174
              },
              "start": 154,
              "end": 174
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 143,
            "end": 175
          }
        ],
        "start": 137,
        "end": 177
      },
      "declare": false,
      "start": 125,
      "end": 177
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 187
                },
                "typeArguments": null,
                "start": 186,
                "end": 187
              },
              "start": 184,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 187
        }
      ],
      "declare": false,
      "start": 179,
      "end": 188
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 199,
              "end": 200
            },
            "optional": false,
            "computed": true,
            "start": 197,
            "end": 201
          },
          "definite": false,
          "start": 193,
          "end": 201
        }
      ],
      "declare": false,
      "start": 189,
      "end": 202
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 214,
              "end": 217
            },
            "optional": false,
            "computed": true,
            "start": 212,
            "end": 218
          },
          "definite": false,
          "start": 207,
          "end": 218
        }
      ],
      "declare": false,
      "start": 203,
      "end": 219
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 231,
              "end": 235
            },
            "optional": false,
            "computed": true,
            "start": 229,
            "end": 236
          },
          "definite": false,
          "start": 224,
          "end": 236
        }
      ],
      "declare": false,
      "start": 220,
      "end": 237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 237
}
```
