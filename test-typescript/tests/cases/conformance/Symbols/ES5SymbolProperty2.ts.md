__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 30,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 30,
                  "name": "Symbol",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
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
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 91,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 52,
                "end": 91,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 62,
                    "end": 85,
                    "static": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 63,
                      "end": 78,
                      "object": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 78,
                        "name": "iterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 79,
                      "end": 85,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 82,
                        "end": 85,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 121,
            "expression": {
              "type": "MemberExpression",
              "start": 96,
              "end": 120,
              "object": {
                "type": "NewExpression",
                "start": 97,
                "end": 102,
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 104,
                "end": 119,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 119,
                  "name": "iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 152,
      "expression": {
        "type": "MemberExpression",
        "start": 125,
        "end": 151,
        "object": {
          "type": "NewExpression",
          "start": 126,
          "end": 133,
          "callee": {
            "type": "MemberExpression",
            "start": 130,
            "end": 133,
            "object": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "MemberExpression",
          "start": 135,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 141,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "name": "iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
