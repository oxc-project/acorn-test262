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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 24,
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
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 24,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 24,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 102,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 100,
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
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 100,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "m",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
