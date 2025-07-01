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
        "name": "Handler",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "OPTIONS",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 49,
                      "end": 50
                    },
                    "start": 42,
                    "end": 51
                  }
                ],
                "start": 38,
                "end": 54
              },
              "expression": false,
              "start": 35,
              "end": 54
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 54
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
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
                "body": [],
                "start": 67,
                "end": 71
              },
              "expression": false,
              "start": 64,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 71
          }
        ],
        "start": 14,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 81
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "statische",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 91
        },
        "right": {
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
            "body": [],
            "start": 105,
            "end": 108
          },
          "expression": false,
          "start": 94,
          "end": 108
        },
        "start": 74,
        "end": 108
      },
      "directive": null,
      "start": 74,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 122
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 134,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 131,
                "end": 137
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "value": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 146,
                  "end": 149
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 143,
                "end": 149
              }
            ],
            "start": 125,
            "end": 151
          },
          "definite": false,
          "start": 115,
          "end": 151
        }
      ],
      "declare": false,
      "start": 109,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 153,
          "end": 167
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Handler",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 177
        },
        "start": 153,
        "end": 177
      },
      "directive": null,
      "start": 153,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 193
            },
            "optional": false,
            "computed": false,
            "start": 179,
            "end": 193
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 201
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 201
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 211
        },
        "start": 179,
        "end": 211
      },
      "directive": null,
      "start": 179,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 342
}
```
