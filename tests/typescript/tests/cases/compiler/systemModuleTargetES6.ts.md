__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 21,
          "end": 24
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass2",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 46
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 65
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 68,
                "end": 70
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 53,
              "end": 71
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyClass2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 114
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 106,
                        "end": 120
                      },
                      "start": 99,
                      "end": 121
                    }
                  ],
                  "start": 97,
                  "end": 123
                },
                "expression": false,
                "start": 94,
                "end": 123
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 76,
              "end": 123
            }
          ],
          "start": 47,
          "end": 125
        },
        "abstract": false,
        "declare": false,
        "start": 32,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 153
        },
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
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 180
                },
                "typeArguments": null,
                "arguments": [],
                "start": 169,
                "end": 182
              },
              "start": 162,
              "end": 183
            }
          ],
          "start": 156,
          "end": 185
        },
        "expression": false,
        "start": 134,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 127,
      "end": 185
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction2",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 214
        },
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
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 242
                },
                "typeArguments": null,
                "arguments": [],
                "start": 230,
                "end": 244
              },
              "start": 223,
              "end": 245
            }
          ],
          "start": 217,
          "end": 247
        },
        "expression": false,
        "start": 194,
        "end": 247
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 247
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
