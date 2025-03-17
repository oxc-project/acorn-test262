__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 169,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
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
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 24,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "name": "as",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 49,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 43,
              "end": 49
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 55,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "name": "as",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
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
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 125,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 106,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "name": "as",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 123,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 149,
                  "end": 153,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 150,
                      "end": 152,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 152,
                        "name": "as",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 152,
                        "name": "as",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "name": "as",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
