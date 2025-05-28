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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 30,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 30,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
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
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 91,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 91,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
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
                "start": 52,
                "end": 91,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 62,
                    "end": 85,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 63,
                      "end": 78,
                      "object": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 78,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 79,
                      "end": 85,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 82,
                        "end": 85,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": true,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "MemberExpression",
                "start": 104,
                "end": 119,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 119,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
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
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "MemberExpression",
          "start": 135,
          "end": 150,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 141,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
