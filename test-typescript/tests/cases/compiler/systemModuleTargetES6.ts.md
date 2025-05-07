__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 24,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 125,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 125,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 47,
          "end": 125,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 71,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 65,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 68,
                "end": 70,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 76,
              "end": 123,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "getInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 94,
                "end": 123,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 97,
                  "end": 123,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 99,
                      "end": 121,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 120,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 114,
                          "decorators": [],
                          "name": "MyClass2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 120,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          "start": 38,
          "end": 46,
          "decorators": [],
          "name": "MyClass2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 127,
      "end": 185,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 134,
        "end": 185,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 156,
          "end": 185,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 162,
              "end": 183,
              "argument": {
                "type": "NewExpression",
                "start": 169,
                "end": 182,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 180,
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 143,
          "end": 153,
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 187,
      "end": 247,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 194,
        "end": 247,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 217,
          "end": 247,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 223,
              "end": 245,
              "argument": {
                "type": "NewExpression",
                "start": 230,
                "end": 244,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 242,
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 203,
          "end": 214,
          "decorators": [],
          "name": "myFunction2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
