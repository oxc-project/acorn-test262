__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 24,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 24,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 16,
                  "end": 20
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 100,
              "async": false,
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
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "start": 68,
                      "end": 97,
                      "body": {
                        "type": "BlockStatement",
                        "start": 78,
                        "end": 97,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 83,
                            "end": 93,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 83,
                              "end": 92,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 83,
                                "end": 90,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 83,
                                  "end": 88
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 90,
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "param": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
