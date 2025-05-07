__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
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
      "start": 25,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 37,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 32,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 37,
          "raw": "12",
          "value": 12,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 79,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 86,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "decorators": [],
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 115,
            "raw": "\"strMemName\"",
            "value": "strMemName",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 128,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 135,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 153,
            "decorators": [],
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 172,
            "raw": "\"dashed-str-mem\"",
            "value": "dashed-str-mem",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 174,
          "end": 189,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "decorators": [],
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 192,
          "end": 196,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 210,
            "decorators": [],
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 213,
            "end": 215,
            "raw": "42",
            "value": 42,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 236,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 228,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 221,
            "end": 227,
            "decorators": [],
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 235,
          "raw": "\"ok\"",
          "value": "ok",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 270,
            "end": 283,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 274,
              "end": 282,
              "decorators": [],
              "name": "_private",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 317,
            "end": 328,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 327,
              "decorators": [],
              "name": "strMem",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 359,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 362,
            "end": 373,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 366,
              "end": 372,
              "decorators": [],
              "name": "numMem",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 422,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 407,
            "end": 422,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 407,
              "end": 410,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 411,
              "end": 421,
              "decorators": [],
              "name": "dashStrMem",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
