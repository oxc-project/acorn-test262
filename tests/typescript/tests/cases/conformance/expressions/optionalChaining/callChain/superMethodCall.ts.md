__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
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
        "start": 11,
        "end": 32,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 23,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 30,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 30,
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
      "start": 34,
      "end": 184,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 47,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 184,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 116,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 116,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 86,
                    "end": 110,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 93,
                      "end": 109,
                      "expression": {
                        "type": "CallExpression",
                        "start": 93,
                        "end": 109,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 93,
                          "end": 105,
                          "object": {
                            "type": "Super",
                            "start": 93,
                            "end": 98
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 105,
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
            "start": 122,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 139,
              "decorators": [],
              "name": "asyncMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 182,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 182,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 176,
                    "argument": {
                      "type": "ChainExpression",
                      "start": 159,
                      "end": 175,
                      "expression": {
                        "type": "CallExpression",
                        "start": 159,
                        "end": 175,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 159,
                          "end": 171,
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 171,
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
