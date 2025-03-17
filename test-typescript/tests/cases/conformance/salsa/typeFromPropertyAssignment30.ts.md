__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Combo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 68,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 22,
            "end": 33,
            "typeParameters": null,
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 66,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 54,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 46,
                          "end": 54,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 48,
                            "end": 54
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 57,
                        "end": 63
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 83,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 83,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 83,
                  "name": "Combo",
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
            "type": "ArrowFunctionExpression",
            "start": 86,
            "end": 93,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 1,
              "raw": "1"
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 172,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 164,
          "end": 167,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 170,
          "end": 172,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
