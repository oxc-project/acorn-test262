__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 253,
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
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 127,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 128,
                          "end": 131,
                          "value": "A",
                          "raw": "\"A\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "accessibility": "public"
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
      "start": 142,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 252,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 250,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 178,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 250,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 223,
                          "end": 226,
                          "value": "B",
                          "raw": "\"B\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
