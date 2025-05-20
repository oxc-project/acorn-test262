__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 67,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 43,
                    "end": 61,
                    "argument": {
                      "type": "CallExpression",
                      "start": 50,
                      "end": 60,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 58,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 50,
                          "end": 55
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 58,
                          "decorators": [],
                          "name": "m1",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 82,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 119,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 119,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 113,
                    "argument": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 112,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 110,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 102,
                          "end": 107
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 110,
                          "decorators": [],
                          "name": "m2",
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "Bar",
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
