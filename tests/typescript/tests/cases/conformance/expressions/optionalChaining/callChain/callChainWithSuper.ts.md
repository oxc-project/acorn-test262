__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 22
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 35,
                "end": 37
              },
              "expression": false,
              "start": 32,
              "end": 37
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": true,
            "accessibility": null,
            "start": 25,
            "end": 37
          }
        ],
        "start": 23,
        "end": 39
      },
      "abstract": false,
      "declare": false,
      "start": 12,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 53
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 80
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 92,
                            "end": 97
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 104
                          },
                          "optional": false,
                          "computed": false,
                          "start": 92,
                          "end": 104
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 92,
                        "end": 108
                      },
                      "start": 92,
                      "end": 108
                    },
                    "start": 85,
                    "end": 109
                  }
                ],
                "start": 83,
                "end": 111
              },
              "expression": false,
              "start": 80,
              "end": 111
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 111
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 123
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 135,
                            "end": 140
                          },
                          "property": {
                            "type": "Literal",
                            "value": "method",
                            "raw": "\"method\"",
                            "start": 141,
                            "end": 149
                          },
                          "optional": false,
                          "computed": true,
                          "start": 135,
                          "end": 150
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 135,
                        "end": 154
                      },
                      "start": 135,
                      "end": 154
                    },
                    "start": 128,
                    "end": 155
                  }
                ],
                "start": 126,
                "end": 157
              },
              "expression": false,
              "start": 123,
              "end": 157
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 116,
            "end": 157
          }
        ],
        "start": 67,
        "end": 159
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 159
}
```
