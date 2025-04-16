__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 22,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": true,
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
      "start": 40,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 53,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 111,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 111,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 111,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 109,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 92,
                      "end": 108,
                      "expression": {
                        "type": "CallExpression",
                        "start": 92,
                        "end": 108,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 92,
                          "end": 104,
                          "object": {
                            "type": "Super",
                            "start": 92,
                            "end": 97
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 104,
                            "name": "method",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": true,
                        "typeArguments": null
                      }
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
            "start": 116,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 123,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 157,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 157,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 155,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 135,
                      "end": 154,
                      "expression": {
                        "type": "CallExpression",
                        "start": 135,
                        "end": 154,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 135,
                          "end": 150,
                          "object": {
                            "type": "Super",
                            "start": 135,
                            "end": 140
                          },
                          "property": {
                            "type": "Literal",
                            "start": 141,
                            "end": 149,
                            "value": "method",
                            "raw": "\"method\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": true,
                        "typeArguments": null
                      }
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
