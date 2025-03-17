__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "value": "a",
              "raw": "\"a\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 121,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 33,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 121,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 63,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 48,
                "end": 53,
                "object": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 56,
                  "end": 62
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 69,
              "end": 119,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 80,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 80,
                "end": 119,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 83,
                  "end": 119,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 93,
                      "end": 113,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 93,
                        "end": 112,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 93,
                          "end": 104,
                          "object": {
                            "type": "ThisExpression",
                            "start": 93,
                            "end": 97
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 98,
                            "end": 103,
                            "object": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 103,
                              "name": "key",
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
                        "right": {
                          "type": "Literal",
                          "start": 107,
                          "end": 112,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      },
                      "directive": null
                    }
                  ]
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
