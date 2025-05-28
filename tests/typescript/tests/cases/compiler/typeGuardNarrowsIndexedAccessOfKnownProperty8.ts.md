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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
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
          "start": 41,
          "end": 121,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 63,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 48,
                "end": 53,
                "object": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 69,
              "end": 119,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 80,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 80,
                "end": 119,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 103,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
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
                "expression": false
              },
              "kind": "constructor",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
