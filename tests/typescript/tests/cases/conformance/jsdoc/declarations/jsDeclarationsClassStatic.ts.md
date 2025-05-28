__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 342,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Handler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 54,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "decorators": [],
              "name": "OPTIONS",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 54,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 54,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 42,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 71,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 71,
                "body": []
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
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 74,
          "end": 91,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 81,
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 94,
          "end": 108,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 105,
            "end": 108,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 151,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 122,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 125,
            "end": 151,
            "properties": [
              {
                "type": "Property",
                "start": 131,
                "end": 137,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 137,
                  "value": "A",
                  "raw": "\"A\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 143,
                "end": 149,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 146,
                  "end": 149,
                  "value": "B",
                  "raw": "\"B\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 178,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 177,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 153,
          "end": 167,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 159,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 170,
          "end": 177,
          "decorators": [],
          "name": "Handler",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 201,
          "object": {
            "type": "MemberExpression",
            "start": 179,
            "end": 193,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 201,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 204,
          "end": 211,
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
