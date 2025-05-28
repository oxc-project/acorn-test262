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
      "expression": {
        "type": "Literal",
        "start": 56,
        "end": 68,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 140,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 138,
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
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 132,
                    "expression": {
                      "type": "CallExpression",
                      "start": 116,
                      "end": 132,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 127,
                        "object": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 123,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 127,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 128,
                          "end": 131,
                          "value": "A",
                          "raw": "\"A\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 142,
      "end": 252,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 250,
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
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 250,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 202,
                    "expression": {
                      "type": "Literal",
                      "start": 191,
                      "end": 201,
                      "value": "ngInject",
                      "raw": "\"ngInject\""
                    },
                    "directive": "ngInject"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 227,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 227,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 222,
                        "object": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 223,
                          "end": 226,
                          "value": "B",
                          "raw": "\"B\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 244,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 243,
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
