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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 22,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 159,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 53,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 159,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 111,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 80,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 111,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true
                      }
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
            "start": 116,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 123,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 157,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "optional": false,
                          "computed": true
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true
                      }
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
