__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 56,
        "end": 68
      },
      "directive": "use strict",
      "start": 56,
      "end": 69
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 103
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
                          "start": 116,
                          "end": 123
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 127
                        },
                        "optional": false,
                        "computed": false,
                        "start": 116,
                        "end": 127
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "A",
                          "raw": "\"A\"",
                          "start": 128,
                          "end": 131
                        }
                      ],
                      "optional": false,
                      "start": 116,
                      "end": 132
                    },
                    "directive": null,
                    "start": 116,
                    "end": 132
                  }
                ],
                "start": 106,
                "end": 138
              },
              "expression": false,
              "start": 103,
              "end": 138
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 85,
            "end": 138
          }
        ],
        "start": 79,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 140
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 159
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 178
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
                      "type": "Literal",
                      "value": "ngInject",
                      "raw": "\"ngInject\"",
                      "start": 191,
                      "end": 201
                    },
                    "directive": "ngInject",
                    "start": 191,
                    "end": 202
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
                          "start": 211,
                          "end": 218
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 222
                        },
                        "optional": false,
                        "computed": false,
                        "start": 211,
                        "end": 222
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "B",
                          "raw": "\"B\"",
                          "start": 223,
                          "end": 226
                        }
                      ],
                      "optional": false,
                      "start": 211,
                      "end": 227
                    },
                    "directive": null,
                    "start": 211,
                    "end": 227
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 236,
                      "end": 243
                    },
                    "directive": null,
                    "start": 236,
                    "end": 244
                  }
                ],
                "start": 181,
                "end": 250
              },
              "expression": false,
              "start": 178,
              "end": 250
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 250
          }
        ],
        "start": 161,
        "end": 252
      },
      "abstract": false,
      "declare": false,
      "start": 142,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 252
}
```
