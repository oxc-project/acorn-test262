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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 58,
                        "object": {
                          "type": "Super",
                          "start": 50,
                          "end": 55
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 58,
                          "name": "m1",
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
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 119,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 82,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 119,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 110,
                        "object": {
                          "type": "Super",
                          "start": 102,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 110,
                          "name": "m2",
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
                    }
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
