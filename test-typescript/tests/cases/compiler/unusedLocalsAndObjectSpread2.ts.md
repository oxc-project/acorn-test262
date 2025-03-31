__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "name": "props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 99,
          "id": {
            "type": "ObjectPattern",
            "start": 30,
            "end": 91,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 44,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 59,
                "end": 69,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "name": "active",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 69,
                  "name": "_a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 82,
                "end": 89,
                "argument": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 89,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 94,
            "end": 99,
            "name": "props",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 201,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 123,
            "end": 199,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 198,
                "id": {
                  "type": "ObjectPattern",
                  "start": 129,
                  "end": 190,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 139,
                      "end": 147,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 167,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 163,
                        "name": "active",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 167,
                        "name": "_a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 177,
                      "end": 184,
                      "argument": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 184,
                        "name": "rest",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 198,
                  "name": "props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 227,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 227,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 223,
              "end": 226,
              "value": 123,
              "raw": "123"
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
  "sourceType": "script",
  "hashbang": null
}
```
