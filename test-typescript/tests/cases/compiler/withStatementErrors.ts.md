__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "name": "ooo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
                      "name": "ooo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 35,
                      "name": "eee",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "name": "oo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "name": "ah_ah",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 49,
                "name": "ting",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "name": "tang",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "name": "walla",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 61,
          "end": 66,
          "name": "walla",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
                "name": "bing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "bang",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "bar",
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
              "start": 161,
              "end": 163,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ClassDeclaration",
            "start": 205,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 213,
              "end": 215,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 237,
            "end": 251,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
