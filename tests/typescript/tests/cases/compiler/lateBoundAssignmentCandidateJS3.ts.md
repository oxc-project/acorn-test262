__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": "prop",
            "raw": "'prop'",
            "start": 13,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 39
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 57
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 75,
                            "end": 79
                          },
                          "optional": false,
                          "computed": true,
                          "start": 70,
                          "end": 80
                        },
                        "right": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 83,
                          "end": 85
                        },
                        "start": 70,
                        "end": 85
                      },
                      "directive": null,
                      "start": 70,
                      "end": 86
                    }
                  ],
                  "start": 60,
                  "end": 92
                },
                "expression": false,
                "start": 57,
                "end": 92
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 46,
              "end": 92
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 158
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "baz",
                "raw": "'baz'",
                "start": 161,
                "end": 166
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 154,
              "end": 167
            }
          ],
          "start": 40,
          "end": 169
        },
        "abstract": false,
        "declare": false,
        "start": 29,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
