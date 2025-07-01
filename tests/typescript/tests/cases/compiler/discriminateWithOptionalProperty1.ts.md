__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 20
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 23,
                      "end": 28
                    },
                    "start": 23,
                    "end": 28
                  },
                  "start": 21,
                  "end": 28
                },
                "accessibility": null,
                "static": false,
                "start": 16,
                "end": 28
              }
            ],
            "start": 14,
            "end": 30
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 39
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 41,
                      "end": 45
                    },
                    "start": 41,
                    "end": 45
                  },
                  "start": 39,
                  "end": 45
                },
                "accessibility": null,
                "static": false,
                "start": 35,
                "end": 46
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 52
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "typeArguments": null,
                    "start": 54,
                    "end": 55
                  },
                  "start": 52,
                  "end": 55
                },
                "accessibility": null,
                "static": false,
                "start": 47,
                "end": 55
              }
            ],
            "start": 33,
            "end": 57
          }
        ],
        "start": 14,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 58
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
            "name": "box",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  ],
                  "start": 82,
                  "end": 90
                },
                "start": 79,
                "end": 90
              },
              "start": 77,
              "end": 90
            },
            "start": 74,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 90
        }
      ],
      "declare": true,
      "start": 60,
      "end": 91
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 100
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 105
        },
        "optional": false,
        "computed": false,
        "start": 97,
        "end": 105
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 114
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 120
              },
              "optional": false,
              "computed": false,
              "start": 111,
              "end": 120
            },
            "directive": null,
            "start": 111,
            "end": 121
          }
        ],
        "start": 107,
        "end": 123
      },
      "alternate": null,
      "start": 93,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
