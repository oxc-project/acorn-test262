__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 252,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 69,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 56,
        "end": 68,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 138,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 132,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 116,
                      "end": 132,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 128,
                          "end": 131,
                          "raw": "\"A\"",
                          "value": "A"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 127,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 123,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 127,
                          "decorators": [],
                          "name": "log",
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
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 142,
      "end": 252,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 250,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 178,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 250,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 202,
                    "directive": "ngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 191,
                      "end": 201,
                      "raw": "\"ngInject\"",
                      "value": "ngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 227,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 227,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 223,
                          "end": 226,
                          "raw": "\"B\"",
                          "value": "B"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 222,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 244,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 243,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
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
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "A",
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
