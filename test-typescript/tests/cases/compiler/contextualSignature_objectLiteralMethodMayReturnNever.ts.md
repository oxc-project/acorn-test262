__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 28,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 14,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 42,
            "end": 89,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 87,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 45,
                  "end": 87,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 48,
                    "end": 87,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 50,
                        "end": 85,
                        "argument": {
                          "type": "NewExpression",
                          "start": 56,
                          "end": 84,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 66,
                              "end": 83,
                              "raw": "\"not implemented\"",
                              "value": "not implemented",
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 65,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
