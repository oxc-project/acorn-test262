__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "ooo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "WithStatement",
      "start": 22,
      "end": 301,
      "object": {
        "type": "MemberExpression",
        "start": 28,
        "end": 66,
        "object": {
          "type": "MemberExpression",
          "start": 28,
          "end": 60,
          "object": {
            "type": "MemberExpression",
            "start": 28,
            "end": 54,
            "object": {
              "type": "MemberExpression",
              "start": 28,
              "end": 49,
              "object": {
                "type": "MemberExpression",
                "start": 28,
                "end": 44,
                "object": {
                  "type": "MemberExpression",
                  "start": 28,
                  "end": 38,
                  "object": {
                    "type": "MemberExpression",
                    "start": 28,
                    "end": 35,
                    "object": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 31,
                      "decorators": [],
                      "name": "ooo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 35,
                      "decorators": [],
                      "name": "eee",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "decorators": [],
                    "name": "oo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "decorators": [],
                  "name": "ah_ah",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 49,
                "decorators": [],
                "name": "ting",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "tang",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "decorators": [],
            "name": "walla",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 61,
          "end": 66,
          "decorators": [],
          "name": "walla",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 301,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 95,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 94,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "bing",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 90,
                "end": 94,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 112,
            "end": 124,
            "expression": {
              "type": "AssignmentExpression",
              "start": 112,
              "end": 123,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 116,
                "decorators": [],
                "name": "bang",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 119,
                "end": 123,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 146,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 161,
              "end": 163,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 187,
            "expression": {
              "type": "CallExpression",
              "start": 181,
              "end": 186,
              "callee": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ClassDeclaration",
            "start": 205,
            "end": 215,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 213,
              "end": 215,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 237,
            "end": 251,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 249,
              "end": 251,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 270,
            "end": 281,
            "id": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 279,
              "end": 281,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
