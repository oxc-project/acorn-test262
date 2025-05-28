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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 67,
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
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 119,
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
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 119,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
