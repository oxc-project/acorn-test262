__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 20,
        "raw": "'file'",
        "value": "file"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 22,
      "end": 49,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 48,
        "raw": "'other_file'",
        "value": "other_file"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 29,
          "end": 30,
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "Z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 102,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 93,
                      "end": 101,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 93,
                        "end": 98
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 110,
      "end": 133,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 125,
        "end": 132,
        "raw": "'file2'",
        "value": "file2"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 117,
          "end": 119,
          "local": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 134,
      "end": 157,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 156,
        "raw": "'file3'",
        "value": "file3"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 141,
          "end": 143,
          "local": {
            "type": "Identifier",
            "start": 141,
            "end": 143,
            "decorators": [],
            "name": "X3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 220,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 218,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 191,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 218,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 214,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 213,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 206,
                          "end": 208,
                          "decorators": [],
                          "name": "X2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 210,
                          "end": 212,
                          "decorators": [],
                          "name": "X3",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 200,
                        "end": 205
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
