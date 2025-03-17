__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 237,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 122,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 100,
            "end": 120,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 104,
                    "end": 110
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
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
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 177,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 143,
            "end": 175,
            "parameters": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 153,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 156,
                "end": 174,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 158,
                    "end": 172,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 164,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 179,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 187,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "A",
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
      "start": 189,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 197,
            "end": 201,
            "object": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 199,
              "end": 200,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 212,
            "end": 218,
            "object": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 214,
              "end": 217,
              "value": "1",
              "raw": "'1'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 229,
            "end": 236,
            "object": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 231,
              "end": 235,
              "value": "hi",
              "raw": "'hi'"
            },
            "computed": true,
            "optional": false
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
