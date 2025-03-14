__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "getFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 36,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 43,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 39,
                "end": 43
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 49,
            "end": 73,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "getFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 65,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 89,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 115,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 101,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 95,
            "end": 101,
            "decorators": [],
            "name": "getFoo",
            "optional": false
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 114,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 111,
            "end": 114,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
