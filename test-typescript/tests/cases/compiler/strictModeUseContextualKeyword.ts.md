__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 168,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 24,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 54,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "decorators": [],
          "name": "as",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 49,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 43,
              "end": 49
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 84,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
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
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 125,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 125,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 106,
            "end": 123,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 123,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 139,
        "end": 168,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 145,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 165,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 149,
                  "end": 153,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 150,
                      "end": 152,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 152,
                        "decorators": [],
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 152,
                        "decorators": [],
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 156,
                  "end": 165,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 158,
                      "end": 163,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "decorators": [],
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
