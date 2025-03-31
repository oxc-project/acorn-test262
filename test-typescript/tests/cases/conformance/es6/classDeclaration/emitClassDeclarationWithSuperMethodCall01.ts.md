__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 134,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 49,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 71,
        "end": 77,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 132,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 100,
                    "end": 126,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 125,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 108,
                          "end": 125,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "CallExpression",
                            "start": 114,
                            "end": 125,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 114,
                              "end": 123,
                              "object": {
                                "type": "Super",
                                "start": 114,
                                "end": 119
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 123,
                                "name": "foo",
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
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
