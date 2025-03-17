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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 20,
        "value": "file",
        "raw": "'file'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 22,
      "end": 49,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 29,
          "end": 30,
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 48,
        "value": "other_file",
        "raw": "'other_file'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 106,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 102,
                    "expression": {
                      "type": "CallExpression",
                      "start": 93,
                      "end": 101,
                      "callee": {
                        "type": "Super",
                        "start": 93,
                        "end": 98
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
    {
      "type": "ImportDeclaration",
      "start": 110,
      "end": 133,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 117,
          "end": 119,
          "local": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "name": "X2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 125,
        "end": 132,
        "value": "file2",
        "raw": "'file2'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 134,
      "end": 157,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 141,
          "end": 143,
          "local": {
            "type": "Identifier",
            "start": 141,
            "end": 143,
            "name": "X3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 156,
        "value": "file3",
        "raw": "'file3'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 191,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 214,
                    "expression": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 213,
                      "callee": {
                        "type": "Super",
                        "start": 200,
                        "end": 205
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 206,
                          "end": 208,
                          "name": "X2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 210,
                          "end": 212,
                          "name": "X3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
