__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forwardRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            },
            "start": 29,
            "end": 34
          },
          "start": 28,
          "end": 34
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 37,
          "end": 40
        },
        "start": 35,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Something",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 65,
                "end": 68
              },
              "start": 63,
              "end": 68
            },
            "start": 54,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 68
        }
      ],
      "declare": true,
      "start": 42,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 80
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 84
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Testing123",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 102
                        },
                        "id": null,
                        "generator": false,
                        "start": 86,
                        "end": 102
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 83,
                      "end": 102
                    }
                  ],
                  "start": 81,
                  "end": 104
                }
              ],
              "optional": false,
              "start": 71,
              "end": 105
            },
            "start": 70,
            "end": 105
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Testing123",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 129
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 130,
          "end": 133
        },
        "abstract": false,
        "declare": false,
        "start": 113,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 106,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
