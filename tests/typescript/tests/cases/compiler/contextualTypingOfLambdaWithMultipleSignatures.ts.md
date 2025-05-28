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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 44,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 49,
            "end": 73,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 90,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 89,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 95,
            "end": 101,
            "decorators": [],
            "name": "getFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 114,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 111,
            "end": 114,
            "body": []
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
