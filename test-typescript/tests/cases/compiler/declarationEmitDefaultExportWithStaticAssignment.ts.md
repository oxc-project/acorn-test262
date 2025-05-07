__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "'./foo'",
        "value": "./foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 27,
      "end": 63,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 63,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 61,
          "end": 63,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 58,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 75,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "Example",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 75,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "'./foo'",
        "value": "./foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 40,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 38,
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 41,
      "end": 77,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 56,
        "end": 77,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 75,
          "end": 77,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 72,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 78,
          "end": 89,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "Example",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 92,
          "end": 95,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Bar",
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
      "type": "ExportDefaultDeclaration",
      "start": 20,
      "end": 56,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 35,
        "end": 56,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 54,
          "end": 56,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 51,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 75,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 69,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 65,
            "decorators": [],
            "name": "Example",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 75,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 94,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 75,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 44,
        "end": 75,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 57,
          "end": 75,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 61,
              "end": 73,
              "argument": {
                "type": "Literal",
                "start": 68,
                "end": 72,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "C",
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
      "type": "ExpressionStatement",
      "start": 77,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 86,
          "end": 89,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
