__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 96,
  "end": 530,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 124,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 103,
        "end": 124,
        "id": {
          "type": "Identifier",
          "start": 112,
          "end": 115,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 122,
          "end": 124,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 474,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 164,
        "end": 474,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 170,
          "end": 175,
          "decorators": [],
          "name": "Aleph",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 474,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 277,
              "end": 382,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 277,
                "end": 288,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 288,
                "end": 382,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 295,
                  "end": 382,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 361,
                      "end": 376,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 361,
                        "end": 375,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 361,
                          "end": 371,
                          "object": {
                            "type": "ThisExpression",
                            "start": 361,
                            "end": 365
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 371,
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 463,
              "end": 472,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 463,
                "end": 467,
                "decorators": [],
                "name": "doIt",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 467,
                "end": 472,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 470,
                  "end": 472,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 510,
      "end": 530,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 517,
        "end": 530,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 523,
            "end": 529,
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 527,
              "end": 529,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
