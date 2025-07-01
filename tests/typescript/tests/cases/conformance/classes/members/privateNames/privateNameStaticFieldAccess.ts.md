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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "myField",
              "start": 21,
              "end": 29
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "hello world",
              "raw": "\"hello world\"",
              "start": 32,
              "end": 45
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 62
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 82
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 86
                        },
                        "optional": false,
                        "computed": false,
                        "start": 75,
                        "end": 86
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 88
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "myField",
                            "start": 89,
                            "end": 97
                          },
                          "optional": false,
                          "computed": false,
                          "start": 87,
                          "end": 97
                        }
                      ],
                      "optional": false,
                      "start": 75,
                      "end": 98
                    },
                    "directive": null,
                    "start": 75,
                    "end": 99
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 113,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "myField",
                            "start": 130,
                            "end": 138
                          },
                          "optional": false,
                          "computed": false,
                          "start": 125,
                          "end": 138
                        }
                      ],
                      "optional": false,
                      "start": 113,
                      "end": 139
                    },
                    "directive": null,
                    "start": 113,
                    "end": 140
                  }
                ],
                "start": 65,
                "end": 154
              },
              "expression": false,
              "start": 62,
              "end": 154
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 154
          }
        ],
        "start": 8,
        "end": 156
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
