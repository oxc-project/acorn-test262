__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 68,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 22,
            "end": 33,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 42,
                "end": 65,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 44,
                    "end": 63,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 54,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 46,
                          "end": 54,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 48,
                            "end": 54
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  }
                ]
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
        "end": 15,
        "decorators": [],
        "name": "Combo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 83,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 83,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 83,
                  "decorators": [],
                  "name": "Combo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 86,
            "end": 93,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 172,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 164,
          "end": 167,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 170,
          "end": 172,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
