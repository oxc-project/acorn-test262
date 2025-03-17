__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 24,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 24,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 16,
                  "end": 20
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "ClassDeclaration",
      "start": 27,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 100,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 100,
                "body": [
                  {
                    "type": "TryStatement",
                    "start": 56,
                    "end": 97,
                    "block": {
                      "type": "BlockStatement",
                      "start": 60,
                      "end": 65,
                      "body": []
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 68,
                      "end": 97,
                      "param": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 78,
                        "end": 97,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 83,
                            "end": 93,
                            "expression": {
                              "type": "CallExpression",
                              "start": 83,
                              "end": 92,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 83,
                                "end": 90,
                                "object": {
                                  "type": "Super",
                                  "start": 83,
                                  "end": 88
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 90,
                                  "name": "m",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    "finalizer": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
